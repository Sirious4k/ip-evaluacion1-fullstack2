import {
  Package,
  User,
  ShoppingCart,
  Box,
  ChartNoAxesColumnIncreasing,
  Tag,
  Users,
  Gauge,
  Store,
} from 'lucide-react'
import DashboardCard from '../components/AdminCard.jsx'
import DashboardCard2 from '../components/AdminCardV2.jsx'

function Panel() {
  return (
    <div className='min-h-screen flex flex-col gradient-main'>
      {/* 🟡 Header superior */}
      <div className='bg-[var(--bg-secondary)] w-full flex justify-start'>
        <h1 className='text-2xl font-bold bg-[var(--bg-primary-color)] p-8 w-[200px] text-center text-white'>
          Panel
        </h1>
      </div>

      {/* 🟢 Section 2 — ocupa TODO el alto restante */}
      <div className='flex flex-1 w-full'>
        {/* Sidebar */}
        <div className='bg-[var(--bg-secondary)] min-w-[200px] flex justify-center items-center'>
          <h2>Usuarios</h2>
        </div>

        {/* Contenido principal */}
        <div className='bg-inherit flex-1 flex flex-col gap-20 p-20'>
          <div className='flex flex-col gap-16'>
            <h1 className='format-text-h2 !text-left w-full !mb-0'>
              Dashboard
            </h1>
            <div className='flex justify-center w-full h-full gap-16'>
              <DashboardCard
                title='Compras'
                value='1,234'
                percent='20%'
                icon={Package}
                color='bg-blue-500'
              />
              <DashboardCard
                title='Compras'
                value='1,234'
                percent='20%'
                icon={Package}
                color='bg-green-500'
              />
              <DashboardCard
                title='Compras'
                value='1,234'
                percent='20%'
                icon={Package}
                color='bg-yellow-500'
              />
            </div>
          </div>
          <div className=' w-full h-full flex flex-col flex-1 gap-8 items-center justify-center'>
            <div className='w-full grid grid-cols-4 gap-20 place-items-center'>
              <DashboardCard2
                title='Compras'
                value='1,234'
                percent='20%'
                icon={Gauge}
                color='bg-gray-200'
              />
              <DashboardCard2
                title='Compras'
                value='1,234'
                percent='20%'
                icon={ShoppingCart}
                color='bg-gray-200'
              />
              <DashboardCard2
                title='Compras'
                value='1,234'
                percent='20%'
                icon={Box}
                color='bg-gray-200'
              />
              <DashboardCard2
                title='Compras'
                value='1,234'
                percent='20%'
                icon={Tag}
                color='bg-gray-200'
              />
              <DashboardCard2
                title='Compras'
                value='1,234'
                percent='20%'
                icon={Users}
                color='bg-gray-200'
              />
              <DashboardCard2
                title='Compras'
                value='1,234'
                percent='20%'
                icon={ChartNoAxesColumnIncreasing}
                color='bg-gray-200'
              />
              <DashboardCard2
                title='Compras'
                value='1,234'
                percent='20%'
                icon={User}
                color='bg-gray-200'
              />
              <DashboardCard2
                title='Compras'
                value='1,234'
                percent='20%'
                icon={Store}
                color='bg-gray-200'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panel
