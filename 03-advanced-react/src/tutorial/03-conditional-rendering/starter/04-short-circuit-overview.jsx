import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')

  const codeExample = text || 'hello world'

  return <div>
    {/* {if(someCondition) {"wont work"}} */}
    <h4>Falsy OR : {text || 'hello world'}</h4>
    <h4>Falsy AND : {text && 'hello world'}</h4>
    <h4>Truthy OR : {name || 'hello world'}</h4>
    <h4>Falsy AND : {name && 'hello world'}</h4>
    {codeExample}
  </div>;
};
export default ShortCircuitOverview;
