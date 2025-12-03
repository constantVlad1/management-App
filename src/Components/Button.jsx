export default function Button ({ onStartAddProject,children, ...props}) {
  return <button  {...props} className=" px-4 py-2 text-xs md:text-base font-bold  rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 "> {children}</button>
}