<?php

namespace App\Dtos\User;

class UserDto
{
    public function __construct(
        public readonly string $name
    ) {}

    public static function fromR(array $data)
    {
        return new self(
            name: $data['name']
        );
    }
}
