# API 호출

## 1. View에서 직접 사용

```txt
.
└── src/
    └── views/
        └── DomainView.vue
```

```vue
<script setup lang="ts">
const searchDomains = async (): Promise<SearchDomainsResponse> => {
  const response = await fetch('/api/domains');

  if (!response.ok) {
    throw new Error();
  }

  const body: SearchDomainsResponse = await response.json();

  return body;
};

const findDomain = async (id: string): Promise<FindDomainResponse> => {
  const response = await fetch(`/api/domains/${id}`);

  // response.status에 따른 핸들러 추가

  if (!response.ok) {
    throw new Error();
  }

  const body: FindDomainResponse = await response.json();

  return body;
};

const saveDomain = async (request: SaveDomainRequest): Promise<SaveDomainResponse> => {
  const response = await fetch('/api/domains', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  });

  // response.status에 따른 핸들러 추가

  if (!response.ok) {
    throw new Error();
  }

  const body: SaveDomainResponse = await response.json();

  return body;
};

const updateDomain = async (id: string, request: UpdateDomainRequest): Promise<UpdateDomainResponse> => {
  const response = await fetch(`/api/domains/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  });

  // response.status에 따른 핸들러 추가

  if (!response.ok) {
    throw new Error();
  }

  const body: UpdateDomainResponse = await response.json();

  return body;
};

const deleteDomain = async (id: string): Promise<DeleteDomainResponse> => {
  const response = await fetch(`/api/domains/${id}`, {
    method: 'DELETE',
  });

  // response.status에 따른 핸들러 추가

  if (!response.ok) {
    throw new Error();
  }

  const body: DeleteDomainResponse = await response.json();

  return body;
};
</script>
```

# 2. HTTP request methods 분리

```txt
.
└── src/
    ├── services/
    │   └── domainService.ts
    └── views/
        └── DomainView.vue
```

```vue
```

```
```