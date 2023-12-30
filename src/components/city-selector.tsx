import { useStore } from "../store";

export default function CitySelector () {
  const selectCity = useStore(state => state.selectCity)


  return (
    <footer className='[grid-area:selector] w-full h-full grid place-items-center bg-slate-600'>
    
        <input
        type="text"
        placeholder="Escribe tu ciudad..."
        required
        name="city"
        autoFocus
        onChange={({ target }) => selectCity(target.value)}
        className="w-[400px] p-2"
      />
      

    </footer>
  )
}