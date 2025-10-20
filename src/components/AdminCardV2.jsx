import { ShoppingCart } from 'lucide-react' // o cualquier ícono de lucide-react

function DashboardCard({
  title = 'Compras',
  value = '1,234',
  percent = '20%',
  icon: Icon = ShoppingCart,
  color = 'bg-blue-500',
}) {
  return (
    <div
      className={`${color} text-black p-6 rounded-lg flex flex-col justify-between gap-5 items-center w-full h-fit`}
    >
      <div className='flex flex-col items-center   gap-3'>
        {Icon && <Icon className='w-12 h-12 text-black opacity-90' />}
        <h2 className='format-text-h2  !mb-0 !text-black'>{title}</h2>
      </div>

      <h2 className='format-text-h2 tracking-wider !mb-0 !text-7xl !text-black'>
        {value}
      </h2>
      <p className='format-text-p !text-left !text-black'>
        Probabilidad de aumento: <span className='font-bold'>{percent}</span>
      </p>
    </div>
  )
}

export default DashboardCard
