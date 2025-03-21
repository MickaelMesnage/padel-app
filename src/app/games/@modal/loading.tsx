export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="w-12 h-12 border-4 border-t-4 border-solid border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
