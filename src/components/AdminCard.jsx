function DashboardCard({
  title,
  value,
  percent,
  // eslint-disable-next-line
  icon: Icon,
  subtitle,
  color,
  label,
}) {
  return (
    <div
      className={`${color} text-white p-6 rounded-lg flex flex-col justify-between w-full md:w-[400px] max-h-[200px] md:h-[200px] cursor-pointer hover:opacity-80 transition-opacity ease-in-out duration-300`}
    >
      <div className='flex items-center   gap-3'>
        <Icon className='w-12 h-12 text-white opacity-90' />
        <h2 className='format-text-h2 !mb-0'>{title}</h2>
      </div>

      <h2 className='format-text-h2 tracking-wider !text-7xl'>{value}</h2>

      <p className='format-text-p text-gray-700'>
        {label}: <span className='font-semibold'>{percent}</span>
      </p>

      <h2 className='format-text-p !text-black'>{subtitle}</h2>
    </div>
  )
}

export default DashboardCard
