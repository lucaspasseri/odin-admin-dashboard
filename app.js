console.log(123);

async function getData() {
	const name = "lucaspasseri";
	const id = 16906161;
	const userUrl = `https://api.github.com/users/${name}`;

	const reposUrl = `https://api.github.com/repositories/${id}`;

	const repo = `https://api.github.com/users/lucaspasseri/repos`;

	const res = await fetch(repo);

	const json = await res.json();

	return json;
}

const data = getData();

console.log({ o: data });
