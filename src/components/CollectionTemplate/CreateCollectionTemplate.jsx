import React, { useContext } from "react";
import Context from "../../Context/DashboardContext";
import { BsArrowRight } from "react-icons/bs";
import "./collectiontemplate.css";
const CreateCollectionTemplate = ({
  title,
  assign,
  update,
  create,
  form,
  functions,
  viewallusers,
}) => {
  const { mode } = useContext(Context);
  return (
    <>
      <section>
        <main
          className={` ${mode === "dark-mode" ? "text-white" : "text-dark"}`}
        >
          <div className="d-flex flex-row align-items-center justify-content-between">
            <h5 className="header-beforeAdmin">{title}</h5>
            <div className="d-flex flex-row align-items-center gap-2">
              {create && (
                <button className="btn btn-primary btn-darkblue">
                  Create <BsArrowRight />
                </button>
              )}
              {assign && (
                <button
                  onClick={functions}
                  className="btn btn-primary  btn-darkblue"
                >
                  Assign <BsArrowRight />
                </button>
              )}
              {update && (
                <div>
                  <form>
                    <button
                      type="submit"
                      className="btn btn-primary btn-darkblue me-3"
                    >
                      Update <BsArrowRight />
                    </button>
                  </form>
                  <button className="btn btn-dark">Reset</button>
                </div>
              )}
              {!update && !viewallusers && (
                <button className="btn btn-dark">
                  View All <BsArrowRight />
                </button>
              )}
              {viewallusers && (
                <button className="btn bg-blue text-white">
                  View all Users <BsArrowRight />
                </button>
              )}
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default CreateCollectionTemplate;
CreateCollectionTemplate.defaultProps = {
  assign: false,
  update: false,
};
