import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import MenuList from '../MenuList/MenuList';

const AccordionComponent = ({ data, title, val }) => {
    return (
        <Accordion defaultActiveKey={val}>
            <Accordion.Item eventKey={val}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    {data?.map((item, index) => (
                        <MenuList key={index} data={item} />
                    ))}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordionComponent;
