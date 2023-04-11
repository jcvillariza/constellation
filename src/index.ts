import http from "http";

const port = 3000;
export const constellation = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      data: "running",
    })
  );
});

constellation.listen(port, async () => {
  console.info("Constellation is open...");
});
