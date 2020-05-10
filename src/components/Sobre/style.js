import styled from "styled-components";

export const ProfileSection = styled.div`
  padding: 50px 0;
  overflow: hidden;
`;
export const Profile = styled.div`
  width: 50%;
  float: left;
`;
export const ProfileList = styled.ul`
  list-style: none;
`;
export const ProfileItem = styled.li`
  margin-bottom: 8px;
`;
export const Span = styled.span`
  display: inline-block;
  width: 100px;
  font-weight: bold;
`;
export const Web = styled.span`
  font-weight: normal;
  color: #1e90ff;
`;

export const Activity = styled.div`
  width: 50%;
  float: left;
`;

export const ActivityDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const ActivityBar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const ActivityTitle = styled.span`
  float: left;
`;
export const ActivityPerc = styled.span`
  float: right;
  margin-right: 100px;
`;
export const ActivityParent = styled.div`
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px;
`;
export const ParentSpan = styled.span`
  background: #1e90ff;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
`;

export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;
