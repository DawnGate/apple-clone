const debounce = (callback: () => void, ms: number, timeOutRef: any) => {
  if (timeOutRef.value) {
    clearTimeout(timeOutRef.value)
  }
  timeOutRef.value = setTimeout(callback, ms)
}

export default debounce
