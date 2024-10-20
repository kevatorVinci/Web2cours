interface DrinkMenuProps {
  title: string;
  children: React.ReactNode;
}

const DrinkMenu = (props: DrinkMenuProps) => {
  return (
    <div className="drink-menu">
      <h4>{props.title}</h4>
      <div className="drink-items">{props.children}</div>
    </div>
  );
};

export default DrinkMenu;
