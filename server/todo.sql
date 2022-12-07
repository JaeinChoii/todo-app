show databases;
use kdt

-- todo TABLE 생성
CREATE TABLE todo (
  id INT NOT NULL PRIMARY KEY auto_increment,
  title VARCHAR(100) NOT NULL,
  done tinyint(1) NOT NULL DEFAULT '0'
);

-- todo TABLE에 값 입력
INSERT INTO todo (title, done) VALUES("Jane todo1", 0);
INSERT INTO todo (title, done) VALUES("Jane todo2", 1);
INSERT INTO todo (title, done) VALUES("Jane todo3", 0);
INSERT INTO todo (title, done) VALUES("Jane todo4", 1);
INSERT INTO todo (title, done) VALUES("Jane todo5", 1);
INSERT INTO todo (title, done) VALUES("Jane todo6", 0);

-- autoincrement인 설정은 null 값 넣어주면 자동으로 입력됨
INSERT INTO todo VALUES(null, 'Jane todo7', 0);
