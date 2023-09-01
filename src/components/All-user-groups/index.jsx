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

  const dispatch = useDispatch();

  const { userGroups } = useSelector(
    (state) => state.userGroups
  );

  useEffect(() => {
    dispatch(getUserGroups());
  }, [refresh])

  const handleRefresh = () => {
    setRefresh(!refresh)
  }

  return (
    <div>
      <div className="div">
        <div>
          <TitleHeader
            title={'All User Groups'}
            subTitle={390}
            assignBtn={false}
          />
        </div>

        <div style={{ marginTop: '30px', marginBottom: '20px' }}>
          <Table_Grid
            heading1={'SN'}
            heading2={'User Group Name'}
            heading3={'Total Users'}
            heading4={'User Group Tree'}
            heading5={'User Group Type'}
            heading6={'Create Timestamp'}
            heading7={'Last Updated'}
            heading8={'Created By'}
            heading9={'Action'}
            data={userGroups?.length > 0 ? userGroups : []}
            allUserGroups={true}
            handleRefresh={handleRefresh}
          />
        </div>

        <div className="py-2 d-flex justify-content-end table-pagination">
          <PaginationRounded />
        </div>
      </div>
    </div>
  )
}

export default All_User_Groups
