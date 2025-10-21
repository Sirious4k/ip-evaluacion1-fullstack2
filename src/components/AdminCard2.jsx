function DashboardCard({ title, icon: Icon, subtitle, color }) {
  return (
    <div
      className={`${color} px-12 py-0 rounded-lg flex flex-col items-center justify-center w-full h-full gap-5 hover:bg-amber-200 cursor-pointer transition-background duration-300 ease-in-out`}
    >
      {Icon && <Icon className='w-20 h-20 text-blue-500 opacity-90' />}
      <h2 className='format-text-h2 !mb-0 !text-black !text-5xl'>{title}</h2>

      <p className='format-text-p !text-black !text-3xl'>{subtitle}</p>
    </div>
  )
}

export default DashboardCard
