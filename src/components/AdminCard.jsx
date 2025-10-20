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
      className={`${color} text-white p-6 rounded-lg flex flex-col justify-between w-full md:w-[400px] max-h-[200px] md:h-[200px]`}
    >
      <div className='flex items-center   gap-3'>
        {Icon && <Icon className='w-12 h-12 text-white opacity-90' />}
        <h2 className='format-text-h2 !mb-0'>{title}</h2>
      </div>

      <h2 className='format-text-h2 tracking-wider !text-7xl'>{value}</h2>
      <p className='format-text-p !text-left'>
        Probabilidad de aumento: <span className='font-bold'>{percent}</span>
      </p>
    </div>
  )
}

export default DashboardCard
