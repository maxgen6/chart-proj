import React, {useEffect, useState} from "react";
import { Spin, Table, Tooltip } from "antd";

import './TableBlock.scss';
import {api} from "../../services";
import {Charts} from "../../components";

const TableBlock = () => {
  const [tableData, setTableData] = useState(null);
  const [dataSource, setDataSource] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => {
    setIsFetching(true);
    await api.tableData.getTableData()
      .then((response) => {
        const { data, status } = response;
        if (status === 200) {
          setTableData(data);
        }
      })
      .catch((e) => console.error(e))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    if (tableData) {
      const dataTableColumn = tableData?.map((item, index) => {
        return {
          key: item.sku_id + index,
          sku: item.sku_id,
          title: item.title,
          category: item.subj_root_name,
          brand: item.brand,
          chart: item.sales_data,
          price: item.price,
          count_sales: item.sales_count,
          sum_sales: item.sales_sum,
        };
      });

      setDataSource(dataTableColumn);
    }
  }, [tableData]);

  const columns = [
    {
      title: 'SKU',
      dataIndex: 'sku',
      key: 'sku',
      render: text => <p>{text}</p>,
    },
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      render: text => <Tooltip title={text} placement={'right'}>
        <p className={'table__block--title'}>{text}</p>
      </Tooltip>,
    },
    {
      title: 'Категория',
      dataIndex: 'category',
      key: 'category',
      render: text => <p>{text}</p>,
    },
    {
      title: 'Бренд',
      dataIndex: 'brand',
      key: 'brand',
      render: text => <p>{text}</p>,
    },
    {
      title: 'График продаж',
      dataIndex: 'chart',
      key: 'chart',
      render: chartsData => <Charts chartsData={chartsData} />,
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: text => <p className={'table__block--sale'}>{text} ₽</p>,
    },
    {
      title: 'Число продаж',
      dataIndex: 'count_sales',
      key: 'count_sales',
      render: text => <p className={'table__block--sale'}>{text}</p>,
    },
    {
      title: ' Сумма продаж',
      dataIndex: 'sum_sales',
      key: 'sum_sales',
      render: text => <p className={'table__block--sale'}>{text} ₽</p>,
    },
  ]

  return (
    isFetching
    ? <Spin size={'large'} />
    : (
      <div className={'table__block'}>
        <Table
          columns={columns}
          dataSource={dataSource}
        />
      </div>
    )
  )
};

export default TableBlock;