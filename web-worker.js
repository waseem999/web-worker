self.addEventListener('message', (ev) => {
  let { data } = ev
  switch (data) {
    case 'Get started':
      self.postMessage("web worker started")
  }
})