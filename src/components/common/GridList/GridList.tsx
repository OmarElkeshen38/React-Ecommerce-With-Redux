import { Row, Col } from "react-bootstrap";
import React from "react";

type TCategory = {
    id?: number;
    title: string;
    prefix: string;
    img: string;
};

type GridListProps = {
    records: [TCategory];
    renderItem: (record: TCategory) => React.ReactNode;
}

function GridList({ records, renderItem }: GridListProps) {

    const categoriesList = records.length > 0 ? records.map((record) => (

        <Col key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">

            {renderItem(record)}

        </Col>
    )) : "There are no categories";

    return <Row>{categoriesList}</Row>
}

export default GridList
