import {debounceTime, distinctUntilChanged, fromEvent, map, Observable} from "rxjs";

// const search$ = new Observable<Event>(observer => {
//   const search = document.getElementById('search')
//
//   if (!search) {
//     observer.error('Element does not exist on the page')
//     return
//   }
//
//   search.addEventListener('input', event => {
//     observer.next(event)
//   })
// })

const search$: Observable<Event> = fromEvent<Event>(
  document.getElementById('search') as HTMLInputElement,
  'input'
)

search$.pipe(
  map(event => {
    return (event.target as HTMLInputElement).value
  }),
  debounceTime(500),
  distinctUntilChanged(),
).subscribe({
  next: value => {
    console.log(value)
  },
  error: err => {
    console.log(err)
  }
})
