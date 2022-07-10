'use strict'

let getHTML = (node) => 'some html'

let someText = (n) => 'some text'

let getNewCode = (event) => (just) => (nothing) => {
  if (event.detail !== null) {
    if (event.detail.newCode !== null) {
      return just(event.detail.newCode)
    } else {
      return nothing
    }
  }
  return nothing
}

let getTab = (event) => (phiTab) => (eoTab) => (just) => (nothing) => {
  if (event.eventName == 'phi-editor-code-changed') {
    return just(phiTab)
  } else if (event.eventName == 'eo-editor-code-changed') {
    return just(eoTab)
  } else {
    return nothing
  }
}

let clipboard = (navigator) => () => navigator.clipboard

// FIXME handle promise
let writeText = (clipboard) => (s) => () => clipboard.writeText(s)

let makePermalink = (editor) => (s) => () => {
  let newRef =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    '?' +
    'editor=' +
    editor +
    '&' +
    'snippet=' +
    encodeURIComponent(s)
  return newRef
}


let setGlobalBoolean = (name) => (val) => () => {
  globalThis[name] = val
}

let readGlobalBooleanImpl = (name) => (just) => (nothing) => () => {
  let g = globalThis[name]
  if (g === true || g === false) {
    return just(g)
  }
  return nothing
}
// TODO listen to onCreate for elements with popovers

// var popoverList

// function waitForElem(selector) {
//   return new Promise((resolve) => {
//     let e = document.getElementById(selector)
//     if (e !== null) {
//       return resolve(e)
//     }

//     const observer = new MutationObserver((mutations) => {
//       let e = document.getElementById(selector)
//       if (e !== null) {
//         resolve(e)
//         observer.disconnect()
//       }
//     })

//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//     })
//   })
// }

// waitForElem('phi-editor').then((elem) => {
//   let popoverTriggerList = [].slice.call(
//     document.querySelectorAll('[data-bs-toggle="popover"]')
//   )

//   popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//     return new bootstrap.Popover(popoverTriggerEl, {
//       container: 'body',
//       html: true,
//     })
//   })
//   // console.log('Element is ready');
//   // console.log(elem.textContent);
// })

export {
  getHTML,
  someText,
  getNewCode,
  getTab,
  clipboard,
  writeText,
  makePermalink,
  readGlobalBooleanImpl,
  setGlobalBoolean
}
