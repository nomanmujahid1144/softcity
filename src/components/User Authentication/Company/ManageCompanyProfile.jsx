import React, { useState } from 'react'
import CreateCollectionTemplate from '../../CollectionTemplate/CreateCollectionTemplate'
import { BsFillCloudyFill } from 'react-icons/bs'
import '../userauthentication.css'
const ManageCompanyProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]))
  }
  return (
    <>
      <CreateCollectionTemplate
        title={'Create New Company'}
        viewallusers={true}
      />
      <main className="mt-5 pt-4">
        <section className="d-flex flex-row gap-md-1 gap-4 profile-main-div">
          <div className="col-3 col-md-4 me-3 d-flex flex-column bg-white rounded-4 shadow-sm profile-div">
            <div className="mb-5 d-flex justify-content-center">
              <img
                width={140}
                height={140}
                className="object-fit-cover rounded-circle m-img"
                src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80"
                alt="Profile"
              />
            </div>
            <h6 className="align-self-center pt-3 text-secondary">
              Angela Jolie
            </h6>
            <div className="px-3 d-flex flex-column gap-2 mt-5">
              <div class="input-group mb-3 input-group-fields ">
                <button
                  class="btn bg-gray py-2 fw-semibold text-secondary bg-gray"
                  type="button"
                  id="button-addon1"
                >
                  Phone
                </button>
                <input
                  type="email"
                  class="form-control bg-white text-secondary"
                  placeholder=""
                  value={'12345678'}
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>
              <div class="input-group mb-3 input-group-fields">
                <button
                  class="btn bg-gray py-2 fw-semibold text-secondary bg-gray"
                  type="button"
                  id="button-addon1"
                >
                  Email
                </button>
                <input
                  type="text"
                  class="form-control bg-white text-secondary"
                  placeholder=""
                  value={'ajolie@yahoo.com'}
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>
              <div class="input-group mb-3 input-group-fields">
                <button
                  class="btn bg-gray py-2 fw-semibold text-secondary bg-gray"
                  type="button"
                  id="button-addon1"
                >
                  Role
                </button>
                <input
                  type="text"
                  class="form-control bg-white text-secondary"
                  placeholder=""
                  value={'Operations'}
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>
              <div class="input-group mb-3 input-group-fields">
                <button
                  class="btn  py-2 fw-semibold text-secondary bg-gray"
                  type="button"
                  id="button-addon1"
                >
                  User Group
                </button>
                <input
                  type="text"
                  class="form-control bg-white text-secondary"
                  placeholder=""
                  value={'Admin Management'}
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>
            </div>
          </div>
          <div className="col d-flex flex-wrap justify-content-center  gap-4 bg-white py-5 rounded-4 shadow-sm profile-data-div">
            <div className="col-11 mb-2 px-4 ">
              <label
                className="form-label fw-semibold fs-7-5"
                htmlFor="description"
              >
                Update Company Logo
              </label>
              <div>
                {!selectedImage && (
                  <input
                    class="form-control form__comapny-description p-2"
                    type="file"
                    onChange={handleImageChange}
                  />
                )}
                {selectedImage && (
                  <div className="form-control p-0">
                    <img
                      width={'100%'}
                      className="form__comapny-image"
                      src={selectedImage}
                      alt="preview"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-5 col-xl-5 col-10 mb-2 profile-input-div">
              <label
                className="form-label fw-semibold fs-7-5"
                htmlFor="templatename"
              >
                Company Name
              </label>
              <input
                required={true}
                autoFocus={true}
                class="form-control form-input-height "
                type="text"
                id="templatename"
                aria-label="default input example"
              />
            </div>
            <div className="col-lg-5 col-xl-5 col-10 mb-2 profile-input-div">
              <label
                className="form-label fw-semibold fs-7-5"
                htmlFor="templatename"
              >
                Company Location
              </label>
              <input
                required={true}
                autoFocus={true}
                class="form-control form-input-height "
                type="text"
                id="templatename"
                aria-label="default input example"
              />
            </div>
            <div className="col-lg-5 col-xl-5 col-10 mb-2 profile-input-div">
              <label
                className="form-label fw-semibold fs-7-5"
                htmlFor="templatename"
              >
                Company Phone
              </label>
              <input
                required={true}
                autoFocus={true}
                class="form-control form-input-height "
                type="text"
                id="templatename"
                aria-label="default input example"
              />
            </div>
            <div className="col-lg-5 col-xl-5 col-10 mb-2 profile-input-div">
              <label
                className="form-label fw-semibold fs-7-5"
                htmlFor="templatename"
              >
                Company Email
              </label>
              <input
                required={true}
                autoFocus={true}
                class="form-control form-input-height "
                type="email"
                id="templatename"
                aria-label="default input example"
              />
            </div>

            <div className="col-lg-5 col-xl-5 col-10 mb-2 profile-input-div">
              <label
                className="form-label fw-semibold fs-7-5"
                htmlFor="description"
              >
                Company Size
              </label>
              <select class="form-select" aria-label="Default select example">
                <option value="1" selected>
                  25-50
                </option>
                <option value="2">50-100</option>
                <option value="3">100-200</option>
              </select>
            </div>
            <div className="col-lg-5 col-xl-5 col-10 mb-2 profile-input-div">
              <label
                className="form-label fw-semibold fs-7-5"
                htmlFor="templatename"
              >
                Estimated Revenue
              </label>
              <input
                required={true}
                autoFocus={true}
                class="form-control form-input-height "
                type="text"
                id="templatename"
                placeholder="$2500-$5000 Yearly"
                aria-label="default input example"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ManageCompanyProfile
