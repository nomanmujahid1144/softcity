import React, { useEffect, useState } from 'react'
import TitleHeader from '../collection-templates/TitleHeader'
import Table_Grid from '../collection-templates/Table_Grid'
import PaginationDefault from '../pagination/PaginationDefault'
import PaginationRounded from '../pagination/PaginationMui'
import Stepper from './Stepper'
import './Stepper/stepper.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUserGroups } from '../../redux/slices/UserGroups/UserGroups'
const All_User_Groups = () => { 
 
  const [refresh, setRefresh] = useState(false);
  const [allUserGroups, setAllUserGroups] = useState([]);
  const { roles } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { userGroups } = useSelector(
    (state) => state.userGroups
  );

  useEffect(() => {
    dispatch(getUserGroups());
  }, [refresh]);

  useEffect(() => {
    setAllUserGroups(userGroups)
  }, [])

  const handleRefresh = () => {
    setRefresh(!refresh)
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(7);

  // Change page function
  const handleChangePage = (event, page) => {
    setCurrentPage(page - 1);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") {
      setAllUserGroups(userGroups);
    } else {
      const filteredItems = userGroups.filter(item => {
        return item.GroupName.toLowerCase().includes(lowercasedValue);
      });
      setAllUserGroups(filteredItems);
    }
  };

  return (
    <div>
      <div className="div">
        <div>
          <TitleHeader
            title={'All User Groups'}
            subTitle={allUserGroups?.length > 0 ? allUserGroups?.length : 0}
            assignBtn={false}
            createBtn={roles == null || roles?.createUserGroup}
            navigationToLink={"/admin/create-usergroup"}
            filterData={filterData}
          />
        </div>
        <div style={{ marginTop: '30px', marginBottom: '20px' }}>
          <Table_Grid
            heading1={'SN'}
            heading2={'User Group Name'}
            heading3={'Total Users'}
            heading4={'User Group Tree'}
            heading5={'Create Timestamp'}
            heading6={'Last Updated'}
            heading7={'Created By'}
            heading8={'Data Hits'}
            heading9={'Action'}
            data={allUserGroups?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)}
            allUserGroups={true}
            handleRefresh={handleRefresh}
          />
        </div>

        <PaginationRounded
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={allUserGroups?.length || 0}
          onChangePage={handleChangePage}
        />
      </div>
    </div>
  )
}

export default All_User_Groups
