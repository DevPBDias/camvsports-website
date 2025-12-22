export function TagSection({ tagTitle }: { tagTitle: string }) {
  return (
    <span className="w-fit rounded-lg bg-[#005096] px-6 py-2 text-xs font-black uppercase tracking-[0.18em] text-white font-heading">
      {tagTitle}
    </span>
  );
}
