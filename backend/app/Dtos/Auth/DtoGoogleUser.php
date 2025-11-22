<?php

namespace App\Dtos\Auth;

class DtoGoogleUser
{
    public function __construct(
        public readonly string $id,
        public readonly string $email,
        public readonly string $name,
        public readonly ?string $avatar,
        public readonly bool $verifiedEmail
    ) {}

    public static function fromGoogleUser($googleUser): self
    {
        return new self(
            id: $googleUser->id,
            email: $googleUser->email,
            name: $googleUser->name,
            avatar: $googleUser->picture,
            verifiedEmail: $googleUser->verified_email
        );
    }
}
