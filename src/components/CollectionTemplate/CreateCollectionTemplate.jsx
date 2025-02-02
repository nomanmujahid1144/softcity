import React, { useContext } from "react";
import Context from "../../Context/DashboardContext";
import { BsArrowRight } from "react-icons/bs";
import "./collectiontemplate.css";
import { Link, useNavigate } from "react-router-dom";
const CreateCollectionTemplate = ({
  viewAllLink,
  ButtonInnerText,
  title,
  assign,
  update,
  create,
  form,
  functions,
  viewallusers,
  viewallTemplates,
  createNewCompany,
  viewAllCompanies,
}) => {
  const { mode } = useContext(Context);

  const navigate = useNavigate();
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
                    <button
                      type="submit"
                      className="btn btn-primary btn-darkblue me-3"
                    >
                      Update <BsArrowRight />
                    </button>
                </div>
              )}
              {viewallTemplates && (
                <Link to="/admin/collection-templates">
                    <button
                      onClick={(e) => navigate('/admin/collection-templates')}
                      className="btn btn-primary btn-darkblue me-3"
                    >
                      View All Templates <BsArrowRight />
                    </button>
                </Link>
              )}
              {/* {!update && !viewallusers && !createNewCompany && (
                <Link to={`${viewAllLink}`}>
                  <button type="button" className="btn btn-dark">
                    View All <BsArrowRight />
                  </button>
                </Link>
              )} */}
              {viewallusers && (
                <button className="btn bg-blue text-white">
                  View all Users <BsArrowRight />
                </button>
              )}
              {createNewCompany && (
                <button type="submit" className="btn btn-primary btn-darkblue">
                  {ButtonInnerText} <BsArrowRight />
                </button>
              )}
              {viewAllCompanies && (
                <Link to="/admin/all-companies">
                  <button type="button" className="btn btn-primary btn-darkblue">
                    View All Companies <BsArrowRight />
                  </button>
                </Link>
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
