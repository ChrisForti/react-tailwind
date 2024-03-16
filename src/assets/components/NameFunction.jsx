export default function NameFunc({ name, age = 44 }) {
  return (
    <div>
      {name} {age}
    </div>
  );
}
