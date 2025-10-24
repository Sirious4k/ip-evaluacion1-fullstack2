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
  X,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import DashboardCard from '../components/AdminCard.jsx'
import DashboardCardv2 from '../components/AdminCard2.jsx'
import data from '../utils/dataAdmin.json'

function Panel() {
  const iconMap = {
    Package: Package,
    User: User,
    ShoppingCart: ShoppingCart,
    Box: Box,
    ChartNoAxesColumnIncreasing: ChartNoAxesColumnIncreasing,
    Tag: Tag,
    Users: Users,
    Gauge: Gauge,
    Store: Store,
  }

  const styles = {
    liBase:
      'group format-text-p !not-italic !text-3xl !font-bold flex justify-center items-center gap-5 !text-white hover:!text-blue-400 transition-color duration-300 ease-in-out',
    liButtonBase:
      'group format-text-p !not-italic !text-3xl !font-bold flex justify-start items-center gap-5 !text-white hover:!text-white/80 transition-color duration-300 ease-in-out py-4 px-10 w-full rounded-lg',
    liButtonGrayExtra: 'bg-gray-900 hover:bg-gray-950',
    liButtonRedExtra: 'bg-red-600 hover:bg-red-800',
    iconClass: 'w-8 h-8 ',
    hr: 'border-t-1 border-white w-full',
    ulContainerMain:
      'w-full flex flex-col items-start gap-8 p-[2rem_2rem_0_2rem]',
    ulContainerSecond:
      'px-10 w-full flex flex-col gap-4 items-baseline justify-baseline',
    ulButtons: 'px-10 w-full flex items-baseline',
    sectionTitle: 'format-text-h2 !text-left w-full !mb-0',
    sectionSubtitle: 'format-text-p !text-left !not-italic',
  }

  return (
    <div className='min-h-screen flex flex-col gradient-main'>
      <div className='bg-[var(--bg-secondary)] w-full flex items-start '>
        <h1 className='text-2xl font-bold bg-[var(--bg-primary-color)] p-8 w-[200px] text-center text-white'>
          Panel
        </h1>
      </div>

      <div className='flex flex-1 w-full'>
        <div className='bg-[var(--bg-secondary)] min-w-[200px] flex flex-col items-baseline justify-baseline gap-10'>
          <ul className={styles.ulContainerMain}>
            <li className={styles.liBase}>
              <Gauge className={styles.iconClass} />
              Dashboard
            </li>
            <li className={styles.liBase}>
              <Tag className={styles.iconClass} />
              Ordenes
            </li>
            <li className={styles.liBase}>
              <Store className={styles.iconClass} />
              Productos
            </li>
            <li className={styles.liBase}>
              <ShoppingCart className={styles.iconClass} />
              Usuarios
            </li>
            <li className={styles.liBase}>
              <ChartNoAxesColumnIncreasing className={styles.iconClass} />
              Reportes
            </li>
          </ul>

          <hr className={styles.hr} />

          <ul className={styles.ulButtons}>
            <li className={styles.liBase}>
              <ChartNoAxesColumnIncreasing className={styles.iconClass} />
              Perfil
            </li>
          </ul>

          <hr className={styles.hr} />

          <ul className={styles.ulContainerSecond}>
            <Link
              to='/'
              className={`${styles.liButtonBase} ${styles.liButtonGrayExtra}`}
            >
              <Store className={styles.iconClass} />
              Tienda
            </Link>
            <li className={`${styles.liButtonBase} ${styles.liButtonRedExtra}`}>
              <X className={styles.iconClass} />
              Cerrar Sesion
            </li>
          </ul>
        </div>

        <div className='bg-inherit flex-1 flex flex-col gap-20 px-30 py-40'>
          <div className='flex flex-col gap-16'>
            <div>
              <h1 className={styles.sectionTitle}>Dashboard</h1>
              <p className={styles.sectionSubtitle}>
                Resumen de las actividades
              </p>
            </div>

            <div className='flex justify-center w-full h-full gap-16'>
              {data.resumen.map((item, i) => {
                const Icon = iconMap[item?.icon] || Package
                return (
                  <DashboardCard
                    key={i}
                    title={item.title}
                    value={item.value}
                    percent={item.details.value}
                    label={item.details.label}
                    icon={Icon}
                    color={item.color}
                  />
                )
              })}
            </div>
          </div>

          <div className='w-full h-full grid grid-cols-4 gap-15'>
            {data.resumen2.map((item, i) => {
              const Icon = iconMap[item?.icon] || Package
              return (
                <DashboardCardv2
                  key={i}
                  title={item.title}
                  subtitle={item.details.subtitle}
                  icon={Icon}
                  color='bg-gray-200'
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panel
