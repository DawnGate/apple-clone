# Apple clone with Vuejs(Nuxt) And Gsap

## Problem:

- When using gsap with into components folder: the self.selector is undefined -> components folder not render as client side rendering ?

* solution: Inner components folder -> we will working with vanilla css animation (navbar components animation for the menu opens)

- Problem occur when interact with z-index and config for the style inner of the element. Example 2 element with z-index first 1000, second 1001 , and inner first element we have 1 item with z-index 9000, the problem is the second element still on top

* solution -> We should reorder the position of the layer. The inner layer index only effect inner not effect outer

- Problem when you try the animation of component with normal js html/css => but you using vuejs or reactjs => The action changing make the problem occur => With some technology should using their suggestion for this. example: Animation with vuejs or reactjs => we need using framermotion, Transition + Transition group

## Note:

1. When working with chrome on WINDOWS you can see some action different with chrome on MAC. Example in MAC when try to catch action hover in menu fly of apple -> you cannot(or current I don't know how to do), but in WINDOWS this is easy just click the right mouse and hover to the developer tool zone

2. Vuejs + gsap: https://stackblitz.com/@GreenSockLearning/collections/gsap-nuxtjs-starters
