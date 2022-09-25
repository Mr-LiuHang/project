import { Input, Button } from 'antd';
import React, { useState } from 'react';

function SubMenuOne(props) {
  const {getIptValue}=props;
  const [iptValue, setIptValue] = useState('');

  const iptChange = (e) => {
    // console.log(e.target.value);
    setIptValue(e.target.value)
  }
  const clickBtn = () => {
    // console.log(iptValue, 'ipnValue');
    getIptValue(iptValue)
  }

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <Input placeholder="请输入menu名称" onChange={iptChange} style={{ width: '300px' }} />
        <Button type="primary" onClick={clickBtn}>保存</Button>
        {/* {iptValue} */}
      </div>
      <span>子菜单1-1</span>
    </div>
  );
}

export default SubMenuOne;
