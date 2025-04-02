import Sidebar from './Sidebar';

export default function ParentDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome, Parent!</h1>
        <p>Click the chat option in the sidebar to talk with your child's teacher.</p>
      </main>
    </div>
  );
}
