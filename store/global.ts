import { reactive } from 'vue'

type MenuItemName = string | null

type GlobalStore = {
  menuOpenName: MenuItemName
  showMenu: (menuItemName: MenuItemName) => void
  hideMenu: () => void
}

export const globalStore: GlobalStore = reactive({
  menuOpenName: null as MenuItemName,
  showMenu: function (menuItemName: MenuItemName) {
    this.menuOpenName = menuItemName
  },
  hideMenu: function () {
    this.menuOpenName = null
  },
})
