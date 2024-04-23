import React, { useEffect, useState } from 'react'
import CreateCollectionTemplate from '../../CollectionTemplate/CreateCollectionTemplate'
import { BsFillCloudyFill } from 'react-icons/bs'
import '../userauthentication.css'
import InputField from '../../fields/InputField'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import TextAreaField from '../../fields/TextAreaField'
import SelectionField from '../../fields/SelectField'
import { createCompany, getCompany, updateCompany } from '../../../redux/slices/Company/createCompanySlice'
import defaultPicture from '../../../assets/images/Default.png';
import defaultPictures from '../../../assets/images/defaults.png';
import defaultIcon from '../../../assets/images/upload.svg';
import { baseURL } from '../../../constants/baseURL'

const CreateCompany = () => {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [companyLogoEdit, setCompanyLogoEdit] = useState(null);

  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [profileImageEdit, setProfileImageEdit] = useState(null);
  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
    setCompanyLogo(event.target.files[0]);
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();
  const { roles } = useSelector((state) => state.auth);

  const [editUser, setEditUser] = useState(false);
  const [credentials, setcredentials] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",

    companyName: "",
    companyLocation: "",
    companyPhoneNumber: "",
    companyEmail: "",
    companyAbout: "",
    companySize: "",
    companyEstimatedRevenue: "",
  });

  const { company } = useSelector(
    (state) => state.company
  )

  useEffect(() => {
    if (Object.keys(params).length > 0) {
      const companyId = params.id;
      dispatch(getCompany({ id: companyId }));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(params).length > 0) {
      setEditUser(true);
      setcredentials({
        firstName: company?.firstName,
        email: company?.email,
        phoneNumber: company?.phoneNumber,

        companyName: company?.companyName,
        companyLocation: company?.companyLocation,
        companyPhoneNumber: company?.companyPhoneNumber,
        companyEmail: company?.companyEmail,
        companyAbout: company?.companyAbout,
        companySize: company?.companySize,
        companyEstimatedRevenue: company?.companyEstimatedRevenue,
      })
      setCompanyLogoEdit(company?.companyLogo);
      setProfileImageEdit(company?.profilePhoto);
    } else {
      setEditUser(false);
      setcredentials({
        firstName: "",
        email: "",
        phoneNumber: "",

        companyName: "",
        companyLocation: "",
        companyPhoneNumber: "",
        companyEmail: "",
        companyAbout: "",
        companySize: "",
        companyEstimatedRevenue: "",
      })
      setSelectedImage(null);
      setCompanyLogo(null);
      setCompanyLogoEdit(null);
      setProfileImage(null);
      setProfileImageEdit(null);
      setProfileImagePreview(null)
    }
  }, [company, params]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    credentials.isCompany = true;
    credentials.role = "superAdmin";

    if (editUser) {
      dispatch(updateCompany({ data: credentials, companyLogo: companyLogo, companyContactPersonImage : profileImage, updateId: params.id, alert })).then((response) => {
        if (response?.payload?.success) {
          navigate('/admin/all-companies'); // Replace with your desired path
        }
      });
    } else {
      dispatch(createCompany({ data: credentials, companyLogo: companyLogo , companyContactPersonImage : profileImage, alert })).then((response) => {
        if (response?.payload?.success) {
          navigate('/admin/all-companies'); // Replace with your desired path
        }
      });
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CreateCollectionTemplate
          title={editUser ? "Update Company" : 'Create New Company'}
          ButtonInnerText={editUser ? "Update" : 'Create'}
          viewAllCompanies={roles == null || roles?.viewCompany}
          createNewCompany={true}
        />
        <main className="mt-5 pt-4">
          <section className="d-flex flex-row gap-md-1 gap-4 profile-main-div">
            <div className="col-3 col-md-4 me-3 d-flex flex-column bg-white rounded-4 shadow-sm profile-div ">
              <div className="mb-5 d-flex justify-content-center">
                <label className='cursor-pointer'>
                  <input
                    className="d-none form-control form__comapny-description"
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      setProfileImage(event.currentTarget.files[0]);
                      setProfileImagePreview( URL.createObjectURL(event.target.files[0]));
                    }}
                  />
                  <div className="form-control p-0">
                    <img
                      width={140}
                      height={140}
                      className="object-fit-cover bg-white rounded-circle m-img"
                      src={profileImagePreview ? profileImagePreview : editUser && profileImageEdit ? baseURL + profileImageEdit : defaultPicture}
                      alt="Profile"
                    />
                  </div>
                </label>
              </div>
              <h6 className="align-self-center pt-3 text-secondary">Profile Picture</h6>
              <div className="px-3 d-flex flex-column  gap-2 mt-5">
                <div class="input-group mb-3 input-group-fields">
                  <div
                    class="btn bg-gray py-2 fw-semibold text-secondary bg-gray"
                    type="button"
                    id="button-addon1"
                  >
                    Contact Person
                  </div>
                  <input
                    type="text"
                    class="form-control bg-white text-secondary"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    name='firstName'
                    value={credentials.firstName}
                    onChange={onChange}
                  />
                </div>
                <div class="input-group mb-3 input-group-fields">
                  <div
                    class="btn bg-gray py-2 fw-semibold text-secondary bg-gray"
                    type="button"
                    id="button-addon1"
                  >
                    Email
                  </div>
                  <input
                    type="email"
                    class="form-control bg-white text-secondary"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    name='email'
                    value={credentials.email}
                    onChange={onChange}
                  />
                </div>
                <div class="input-group mb-3 input-group-fields">
                  <div
                    class="btn bg-gray py-2 fw-semibold text-secondary bg-gray"
                    type="button"
                    id="button-addon1"
                  >
                    Phone Number
                  </div>
                  <input
                    type="number"
                    class="form-control bg-white text-secondary"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    name='phoneNumber'
                    value={credentials.phoneNumber}
                    onChange={onChange}
                  />
                </div>
                {/* <div class="input-group mb-3 input-group-fields">
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
                </div> */}
              </div>
            </div>
            <div className="col d-flex flex-wrap justify-content-center gap-4 bg-white py-5 rounded-4 shadow-sm profile-data-div">
              <div className="col-lg-5 col-xl-5 col-10 mb-2 profile-input-div">
                <InputField
                  extra="w-100"
                  label="Company Name"
                  extraClasses="form-control form-input-height"
                  required={true}
                  placeholder="Enter Company Name"
                  id="companyName"
                  type="text"
                  value={credentials.companyName}
                  onChange={onChange}
                />
                {/* <label
                  className="form-label fw-semibold fs-7-5"
                  htmlFor="templatename"
                >
                  Company Name
                </label> */}

                {/* <input
                  required={true}
                  autoFocus={true}
                  class="form-control form-input-height "
                  type="text"
                  id="templatename"
                  aria-label="default input example"
                /> */}
              </div>
              <div className="col-lg-5 col-xl-5 col-10  mb-2 profile-input-div">
              <InputField
                  extra="w-100"
                  label="Company Location"
                  extraClasses="form-control form-input-height"
                  required={true}
                  placeholder="Enter Company Location"
                  id="companyLocation"
                  type="text"
                  value={credentials.companyLocation}
                  onChange={onChange}
                />
              </div>
              <div className="col-lg-5 col-xl-5 col-10  mb-2 profile-input-div">
                <InputField
                  extra="w-100"
                  label="Company Phone"
                  extraClasses="form-control form-input-height"
                  required={true}
                  placeholder="Enter Company Phone"
                  id="companyPhoneNumber"
                  type="number"
                  value={credentials.companyPhoneNumber}
                  onChange={onChange}
                />
              </div>
              <div className="col-lg-5 col-xl-5 col-10  mb-2 profile-input-div">
                <InputField
                  extra="w-100"
                  label="Company Email"
                  extraClasses="form-control form-input-height"
                  required={true}
                  placeholder="Enter Company Email"
                  id="companyEmail"
                  type="text"
                  value={credentials.companyEmail}
                  onChange={onChange}
                />
              </div>
              <div className="col-lg-5 col-xl-5 col-10  mb-2 profile-input-div">
                <label
                  className="form-label fw-semibold fs-7-5"
                  htmlFor="description"
                >
                  Update Company Logo
                </label>
                <label className='cursor-pointer form-control form__comapny-description'>
                  <input
                    className="d-none form-control form__comapny-description"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {(selectedImage || editUser) && (
                    <div className="form-control p-0">
                      <img
                        width={'100%'}
                        className="form__comapny-image"
                        src={selectedImage ? selectedImage : editUser && companyLogoEdit ? baseURL + companyLogoEdit : defaultIcon}
                        alt="preview"
                      />
                    </div>
                  )}
                </label>
              </div>
              <div className="col-lg-5 col-xl-5 col-10  mb-2 profile-input-div">
              <TextAreaField
                  extra="w-100"
                  label="About Company"
                  extraClasses="form-control form-input-height"
                  required={true}
                  placeholder="Enter About Company"
                  id="companyAbout"
                  type="text"
                  rows={5}
                  value={credentials.companyAbout}
                  onChange={onChange}
                />
                {/* <label
                  className="form-label fw-semibold fs-7-5"
                  htmlFor="description"
                >
                  About Company
                </label>
                <textarea
                  class="form-control form__comapny-description"
                  id="description"
                  style={{ resize: ' none', height: '8rem' }}
                  aria-label="default input example"
                /> */}
              </div>
              <div className="col-lg-5 col-xl-5 col-10  mb-2 profile-input-div">
                <SelectionField
                  extra="w-100"
                  label="Company Size"
                  extraClasses="form-control form-input-height"
                  required={true}
                  placeholder="Please select an option"
                  id="companySize"
                  options={[
                    { label: "25-50", value: "25-50" },
                    { label: "50-100", value: "50-100" },
                    { label: "100-200", value: "100-200" },
                  ]}
                  type="text"
                  value={credentials.companySize}
                  onChange={onChange}
                />
                {/* <label
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
                </select> */}
              </div>
              <div className="col-lg-5 col-xl-5 col-10  mb-2 profile-input-div">
                <InputField
                  extra="w-100"
                  label="Estimated Revenue"
                  extraClasses="form-control form-input-height"
                  required={true}
                  placeholder="$2500-$5000 Yearly"
                  id="companyEstimatedRevenue"
                  type="number"
                  value={credentials.companyEstimatedRevenue}
                  onChange={onChange}
                />
                {/* <label
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
                /> */}
              </div>
            </div>
          </section>
        </main>
      </form>
    </>
  )
}

export default CreateCompany
