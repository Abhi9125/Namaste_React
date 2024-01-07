const Contact = () => {
  return (
    <div>
      <h1 className="m-2 p-1 border border-black rounded-md">
        Mail me on : abhi.singh3132@gmail.com
      </h1>

      <form>
        <input
          className="m-2 p-1 border border-black rounded-md"
          placeholder="Enter Name"
        />
        <input
          className="m-2 p-1 border border-black rounded-md"
          placeholder="Message"
        />
        <button className="m-2 p-1 border border-black rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
