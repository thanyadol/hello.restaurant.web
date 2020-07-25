<template>
  <div>
  <vuetable ref="vuetable"
    :api-mode="false"
    :fields="fields"
    :per-page="perPage"
    :data-manager="dataManager"
      pagination-path="pagination"
    @vuetable:pagination-data="onPaginationData">
  </vuetable>
    <div class='page'>
      <vuetable-pagination ref="pagination"
        @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
    </div>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'dgrid',

  components: {
    Vuetable,
    VuetablePagination
  },

  data () {
    return {
      fields: ['name', 'lat', 'lng', 'address', 'rating'],
      perPage: 10,
      data: []
    }
  },
  computed: {
    ...mapGetters({
      restaurants: 'Restaurant/getRestaurant'
    })
  },
  watch: {
    data (newVal, oldVal) {
      this.$refs.vuetable.refresh()
    }
  },
  mounted () {
    this.onDefaultKeywordChange()
  },
  methods: {
    ...mapActions({
      listRestaurant: 'Restaurant/listRestaurant'
    }),
    async onDefaultKeywordChange () {
      let keyword = 'Bang Sue'
      await this.listRestaurant(keyword)
      this.data = this.restaurants
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    dataManager (sortOrder, pagination) {
      if (this.data.length < 1) return

      let local = this.data

      // sortOrder can be empty, so we have to check for that as well
      if (sortOrder.length > 0) {
        // console.log("orderBy:", sortOrder[0].sortField, sortOrder[0].direction)
        local = _.orderBy(
          local,
          sortOrder[0].sortField,
          sortOrder[0].direction
        )
      }

      pagination = this.$refs.vuetable.makePagination(
        local.length,
        this.perPage
      )
      console.log('pagination:', pagination)
      let from = pagination.from - 1
      let to = from + this.perPage

      return {
        pagination: pagination,
        data: _.slice(local, from, to)
      }
    },
    onActionClicked (action, data) {
      console.log('actions click', data.name)
    }
  }
}
</script>

<style scope>
button.ui.button {
  padding: 8px 3px 8px 10px;
  margin-top: 1px;
  margin-bottom: 1px;
}
a.item
{
    background-color: transparent;
    padding: 0.5em 1em;
    background: #e9ecef;
    margin: 1px;
}
a.item:hover, tr:hover
{
    background: #f3e7ed;
    cursor: pointer;
}

.page
{
  padding: 2em;
}
.ui.right
{
  text-align: right;
  display: block;
}
</style>
