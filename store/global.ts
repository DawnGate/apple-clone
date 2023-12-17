import { reactive } from 'vue'

type GlobalStore = {
  isMenuOpen: boolean
  showMenu: () => void
  hideMenu: () => void
}

export const globalStore: GlobalStore = reactive({
  isMenuOpen: false as boolean,
  showMenu: function () {
    this.isMenuOpen = true
  },
  hideMenu: function () {
    this.isMenuOpen = false
  },
})
