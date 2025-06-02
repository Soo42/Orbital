type UserStatusProps = {
    name: string;
    status: string;
  };
  
function UserStatus({ name, status }: UserStatusProps) {
    return <div className="user-status">
        <span className="user-name">{name}</span>
        <span className="user-status">{status}</span>
    </div>;
}

export default UserStatus;