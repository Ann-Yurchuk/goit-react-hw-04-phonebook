import styled from '@emotion/styled';

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 3%;
`;

export const LabelPhone = styled.label`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
`;

export const InputPhone = styled.input`
  width: 200px;
  outline: none;
  height: 30px;
  padding: 5px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  border-radius: 3%;
  border: 1px solid black;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  display: inline-block;
  width: 120px;
  height: 60px;
  padding: 15px;
  margin: 10px 20px;
  border-radius: 15px;
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
`;
