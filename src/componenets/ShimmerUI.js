export default function ShimmerUI() {
  return (
    <div className="border p-4 rounded shadow-md bg-gray-300">
      <div className="h-48 w-full bg-gray-400 rounded mb-4 animate-pulse"></div>
      <div className="h-6 w-3/4 bg-gray-400 rounded mb-2 animate-pulse"></div>
    </div>
  );
}
