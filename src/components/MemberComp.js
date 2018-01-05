import React from 'react';

const MemberComp = ({memberData}) => (
  <div>
    {memberData && (`Welcome ${memberData.first_name} ${memberData.last_name}`)}
  </div>
);


export default MemberComp;