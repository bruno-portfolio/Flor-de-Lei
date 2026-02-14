"use client";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar por nome ou cidade..."
      aria-label="Buscar associação por nome ou cidade"
      className="w-full bg-white border border-cream-dark rounded-lg px-4 py-3 text-bark min-h-touch focus:outline-none focus:ring-2 focus:ring-forest placeholder:text-bark-light/60"
    />
  );
}
