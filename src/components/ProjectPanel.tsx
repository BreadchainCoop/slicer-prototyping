export function ProjectPanel({ name }: { name: string }) {
  return (
    <div className="flex flex-row border-2 border-neutral-400 rounded p-4 justify-between">
      <span>{name}</span>
      <div className="flex gap-2">
        <button>-</button>
        <input className="p-2 border-2 border-neutral-300" type="text" />
        <button>+</button>
      </div>
    </div>
  );
}
