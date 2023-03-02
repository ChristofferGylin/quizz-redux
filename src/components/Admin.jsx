const Admin = () => {
  return (
    <div className=" grid grid-cols-2 gap-4 w-full p-4">
      <form
        action=""
        className="flex flex-col border border-slate-400 bg-slate-200 rounded-lg p-4"
      >
        <h2 className="text-lg font-semibold">Question:</h2>
        <div className="flex flex-col my-4">
          <label htmlFor="inputTitle">Title</label>
          <input
            type="text"
            id="inputTitle"
            className="border border-slate-500 rounded"
          />
        </div>
        <h2 className="text-lg font-semibold">Answers:</h2>
        <div className="flex flex-col my-4">
          <label htmlFor="inputAlt0">Alternative 1</label>
          <input
            type="text"
            id="inputAlt0"
            className="border border-slate-500 rounded"
          />
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="inputAlt1">Alternative 2</label>
          <input
            type="text"
            id="inputAlt1"
            className="border border-slate-500 rounded"
          />
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="inputAlt2">Alternative 3</label>
          <input
            type="text"
            id="inputAlt2"
            className="border border-slate-500 rounded"
          />
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="inputCorrect">Correct Answer:</label>
          <select id="inputCorrect" className="border border-slate-500 rounded">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="flex gap-4 mx-auto">
          <button className="py-1 px-3 border text-slate-100 rounded-xl bg-slate-600 border-slate-400 hover:bg-slate-700 hover:text-slate-50">
            Save New
          </button>
          <button className="py-1 px-3 border text-slate-100 rounded-xl bg-slate-600 border-slate-400 hover:bg-slate-700 hover:text-slate-50">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
