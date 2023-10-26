
WITH RecursiveQuery AS (
SELECT c.id, c.name, c.subdivision_id, c.age, s.name AS sub_name, s.parent_id, 0 AS sub_level 
FROM collaborators c 
JOIN subdivisions s 
ON c.subdivision_id = s.id
WHERE c.id = 710253

UNION ALL

SELECT c.id, c.name, c.subdivision_id, c.age, s.name AS sub_name, s.parent_id, rq.sub_level + 1  
FROM collaborators c
JOIN subdivisions s 
ON c.subdivision_id = s.id
JOIN RecursiveQuery rq 
ON rq.subdivision_id = s.parent_id 
WHERE c.age < 40 AND LEN(c.name) > 11 AND s.id NOT IN (100055, 100059)
)
SELECT DISTINCT rq.id, rq.name, rq.sub_name, rq.subdivision_id, rq.sub_level, 
(SELECT COUNT(c2.subdivision_id)  
FROM collaborators c2 
WHERE c2.subdivision_id = rq.subdivision_id) AS colls_count
FROM RecursiveQuery rq
ORDER BY rq.sub_level
