export function NameFunc({ name, age = 44 }) {
  return (
    <div>
      {name} {age}
    </div>
  );
}

export default NameFunc;
