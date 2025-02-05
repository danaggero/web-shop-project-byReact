import React, { useState } from 'react';
import styles from './AsksWrite.module.css';

const AsksWrite = () => {
    const [formData, setFormData] = useState({
        inquiryType: '',
        orderNumber: '',
        orderDate: '',
        name: '',
        userId: '',
        email: '',
        title: '',
        content: '',
        photo: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            photo: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //일단 여기에 백엔드 API 호출 코드 들어가야함 그러고 데이터 전송 로직
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={styles.Container}>
            <div>
                <label>문의 유형:</label>
                <input type="text" name="inquiryType" value={formData.inquiryType} onChange={handleChange} />
            </div>
            <div>
                <label>주문 번호:</label>
                <input type="text" name="orderNumber" value={formData.orderNumber} onChange={handleChange} />
            </div>
            <div>
                <label>주문 일자:</label>
                <input type="date" name="orderDate" value={formData.orderDate} onChange={handleChange} />
            </div>
            <div>
                <label>성명:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label>아이디:</label>
                <input type="text" name="userId" value={formData.userId} onChange={handleChange} />
            </div>
            <div>
                <label>이메일:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label>제목:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </div>
            <div>
                <label>내용:</label>
                <textarea name="content" value={formData.content} onChange={handleChange}></textarea>
            </div>
            <div>
                <label>사진 첨부:</label>
                <input type="file" name="photo" onChange={handleFileChange} />
            </div>
            <button type="submit">제출</button>
        </form>
    );
};

export default AsksWrite;