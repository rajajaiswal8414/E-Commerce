export const Status = ({ text, icon: Icon, bg, color }) => {
  return (
    <div
      className={`${bg} ${color} px-2 py-2 rounded flex items-center gap-1 font-medium`}
    >
      {text} {Icon && <Icon size={15} />}
    </div>
  );
};
