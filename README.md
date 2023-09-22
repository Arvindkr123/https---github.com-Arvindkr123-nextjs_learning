# Created Api in next js to Get the user from backend

```javascript
export async function GET(request) {
  let users = [];
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
    return NextResponse({
      message: "Couldn't find users",
      status: true,
    });
  }
  return NextResponse.json(users);
}
```

## CREATED API TO POST THE USER DATA

```javascript
export async function POST(request) {
  // const body = request.body;
  // console.log("this is body of req ", body);
  // console.log("method of the body", request.method);
  // console.log("cookies", request.cookies);
  // console.log("header", request.headers);

  // const jsonData = await request.json();
  // console.log(jsonData);

  // const textData = await request.text();
  // console.log(textData);

  // return NextResponse.json({
  //   message: "post data successfully",
  // });

  const { name, email, password, about, profileUrl } = await request.json();
  const user = new User({
    name,
    email,
    password,
    profileUrl,
    about,
  });

  try {
    const createdUser = await user.save();
    const response = NextResponse.json(createdUser, {
      status: 202,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create user!",
    });
  }
}
```

```javascript
// Get the single user from the server
export async function GET(request, { params }) {
  const { userId } = params;
  let user;
  try {
    user = await User.findById(userId);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
  return NextResponse.json(user);
}

// delete user from the database
export async function DELETE(request, { params }) {
  const { userId } = params;
  try {
    await User.deleteOne({
      _id: userId,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error in deleting user",
      success: true,
    });
  }
  return NextResponse.json({
    message: "deleted user successfully",
    success: true,
  });
}
```

```javascript
// update user
export const PUT = async (request, { params }) => {
  const { userId } = params;
  const { name, password, profile_Url, about } = await request.json();
  let user;
  try {
    user = await User.findById(userId);
    user.name = name;
    user.password = password;
    user.profile_Url = profile_Url;
    user.about = about;

    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
```
