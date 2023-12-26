import { reactive } from 'vue'

type MenuItemName = string | null

type GlobalStore = {
  menuOpenName: MenuItemName
  menuOpenNameDelay: any
  showMenu: (menuItemName: MenuItemName, timer?: number) => void
  windowHeight: number
  updateWindowHeight: (newHeight: number) => void
  scrollBarWidth: number
  updateScrollBarWidth: (newWidth: number) => void
}

export const globalStore: GlobalStore = reactive({
  menuOpenName: null as MenuItemName,
  menuOpenNameDelay: null as any,
  showMenu: function (menuItemName, timer = 0) {
    clearTimeout(this.menuOpenNameDelay)
    if (timer) {
      this.menuOpenNameDelay = setTimeout(() => {
        this.menuOpenName = menuItemName
      }, timer)
    } else {
      this.menuOpenName = menuItemName
    }
  },
  windowHeight: 0,
  updateWindowHeight: function (newHeight) {
    this.windowHeight = newHeight
  },
  scrollBarWidth: 0,
  updateScrollBarWidth: function (newWidth) {
    this.scrollBarWidth = newWidth
  },
})
